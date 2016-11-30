Array.prototype.toTwenty = function(){
    results = [];
    for(var count = 1; count < 21; count++){
        results.push(count);
    }
    return results;
};
Array.prototype.toForty = function(){
    results = [];
    for(var count = 2; count < 41; count+=2){
        results.push(count);
    }
    return results;
};
Array.prototype.toOneThousand = function(){
    results = [];
    for(var count = 10; count < 1001; count+=10){
        results.push(count);
    }
    return results;
};
Array.prototype.search = function(key){
    var results = {};
    results.count = 0;
    results.length = this.length;
    var lo = 0,
        hi = this.length - 1,
        mid,
        element;
    while(lo <= hi){
        if(this[lo] === key){
          results.index = lo;
          break;
        }
        if(this[hi] === key){
          results.index = hi;
          break;
        }
        mid = Math.floor((lo + hi) / 2);
        element = this[mid];
        if(element < key){
            lo = mid + 1;
            hi--;
            results.count += 1;
        } else if(element > key){
            hi = mid - 1;
            lo++;
            results.count += 1;
        } else {
        results.index = mid;
            break;
        }
    }
    if(results.hasOwnProperty('index') === false)
        results.index = -1;
    return results;
};