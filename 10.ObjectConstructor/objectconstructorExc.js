let carObjMaker = function(name,color,engine){
        this.name = name;
        this.color = color;
        this.engine = engine;
        let id = name + color + engine;
        this.getId = function(){
            return id;
        }
        this.setId = function(someId){
            id = someId;
        }
};

let opelObject = new carObjMaker('opel', 'white', 1200);
console.log(opelObject.getId());
opelObject.setId("Ford");
console.log(opelObject.getId());
