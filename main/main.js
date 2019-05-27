module.exports = function main(inputs) {
    // write your code here...
    var dis = inputs['distance'];
    var time = inputs['parkTime'];
    var price = calculate(dis, time);
    return Math.round(price);
};

function calculate(dis, time) {
    return caldis(dis) + caltime(time);
};

function caldis(dis) {
    dis = Math.ceil(dis);
    if(dis <= 2){
        return 6;
    }else if(dis > 2 && dis <= 8){
        return 6 + (dis - 2) * 0.8;
    }else{
        return 6 + 6 * 0.8 + (dis - 8) * 1.2;
    }
};

function caltime(time) {
    time = Math.ceil(time);
    if(time <= 0){
        return 0;
    }else{
        return time * 0.25;
    }
};

