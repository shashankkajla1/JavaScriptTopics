const Obj = {
  name: "Joy",
  getName: function() {
    const inner = () => {
      console.log(this.name); 
    }
    inner();
  }
};

Obj.getName();
