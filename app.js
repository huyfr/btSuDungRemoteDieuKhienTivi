function Remote (code, volume)
{
    this.code=code;
    this.volume=volume;

    this.getCode=function ()    //Lấy kênh cần chuyển trên remote
    {
        return this.code;
    };

    this.setCode=function (code)    //Đặt lại kênh cần chuyển
    {
        this.code=code;
    };

    this.volumeUp=function (tv,number)  //Bấm nút tăng âm lượng trên điều khiển thì âm lượng trên tiv cũng tăng
    {
        tv.volumeUpTv(number);
    };

    this.volumeDown=function (tv,number)    //Bấm nút giảm âm lượng trên điều khiển thì âm lượng trên tiv cũng giảm
    {
        tv.volumeDownTv(number);
    };

    this.nextTurn=function (tv, status)     //Xử lý hành động bật tắt tivi trên điều khiển.
    {
        tv.setStatus(status);
    };
}

function Tivi (status, chanel, volume)
{
    this.status=status;
    this.chanel=chanel;
    this.volume=volume;

    this.getStatus=function ()      //Trả về trạng thái của tivi
    {
        return this.status;
    };

    this.setStatus=function (status)      //Đặt lại trạng thái cho tivi
    {
        this.status=status;
    };

    this.getVolume=function ()      //Trả lại giá trị volume  tivi
    {
        return this.volume;
    };

    this.setVolume=function (volume)        //Đặt lại giá trị volume tivi
    {
        this.volume=volume;
    };

    this.getChanel=function ()      //Trả lại kênh mà tivi đang chiếu
    {
        return this.chanel;
    };

    this.setChanel=function (chanel)    //Đặt lại kênh cho tivi
    {
        this.chanel=chanel;
    };

    this.volumeDownTv=function (number)     //Giảm volume trên tivi
    {
        this.volume=this.volume-number;
    };

    this.volumeUpTv=function (number)       //Tăng volume trên tivi
    {
        this.volume=this.volume+number;
    };

    this.switchChanel=function(chanel)      //Chuyển kênh trên tivi
    {
        if (this.status)                    //Kiểm tra trạng thái tivi
        {
            for (let i=1;i<=50;i++)         //Giới hạn số kênh là 50
            {
                if (chanel.getCode()===i)   //Lấy kênh truyền vào và so sánh số đấy với vòng lặp từ 1->50
                {
                    return this.chanel=i;   //Nếu có thì trả lại kênh đấy trên tivi bằng đúng số nhập vào
                }
            }
        }
    };
}

let remote = new Remote();
let tv = new Tivi(true,10,0);

console.log("Trang thai tivi: "+tv.getStatus());

tv.setChanel(7);
console.log("Chuyen den kenh: "+tv.getChanel());

remote.setCode(3);
console.log("Bam kenh so: "+remote.getCode()+" tren dieu khien");
tv.switchChanel(remote);
console.log("Tivi nhan tin hieu tu dieu khien va chuyen den kenh so: "+tv.getChanel());

remote.volumeUp(tv,2);
console.log("Dung dieu khien tang volume len: "+tv.getVolume());

remote.nextTurn(tv,false);
console.log("Trang thai tivi: "+tv.getStatus());