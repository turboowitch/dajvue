class Dep{
    constructor (){
        this.subscribers = new Set();
    }
    addEffect(effect){
        this.subscribers.add(effect);
    }

    depend(){

    }

    notify(){
        this.subscribers.forEach(effect=>{
            effect();
        })
    }
}



let activeEffect = null;
function watchEffect(effect){
    activeEffect = effect;
    departFocus.depend();
    effect();
    activeEffect = null;
}

//wekMay
const targetMap = new WeakMap();
function getDep(target,key){
    let dep= 
    if(!dep)
    return dep;
}




//vue2对raw进行数据劫持
function reactive(raw){
    Object.keys(raw).forEach(key =>{

        dep.depend();

        Object.defindProperty(raw,key,{
            get(){

            },
            set(newValue){
                value = newValue;
                dep.notify()
            }
        })
    })
    return raw;
}





const info = {counter:100,name:"why"};


const dep = new Dep();

//watchEffect1
watchEffect(function(){
    console.log(info.counter *2,info.name);
})

//watchEffect2
watchEffect(function(){
    console.log(info.counter *2,info.counter);
})

//watchEffect3
watchEffect(function(){
    console.log(info.counter *2,info.name);
})

info.counter++;
info.name = "lilei"
dep.notify();
