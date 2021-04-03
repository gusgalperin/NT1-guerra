class Utils{
    static random(desde, hasta){
        return Math.floor(Math.random() * (hasta - desde) + desde);
    }

    static disableElems(elems, disable){
        for (let i = 0; i < elems.length; i++) {
            if(disable)
                elems[i].classList.add('disabled');
            else
                elems[i].classList.remove('disabled');
        }
    }
}