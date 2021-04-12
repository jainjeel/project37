class Contestant{
    constructor(){
        this.index=null;
        this.answer=0;
        this.name=null;
        

    }

    getCount(){
      var contestantCountRef =database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
     contestantCoiunt= data.val();
      })
      
    }
     
    update(count){
        database.ref('/').update({
            contestantCount:count
        });
        
    }

    update(){
    var  contestantIndex="contestants/contestant"+this.index;
    database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
    });
    }

   staticPlayerInfo(){
       var contestantInfoRef=database.ref('contestants');
       contestantInfoRef.on("value",(data)=>{
           allContestants=data.val();
       })
   }


}









    
