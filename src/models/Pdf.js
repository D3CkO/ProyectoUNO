class Pdf extends MultimediaElement{
    constructor(file,type = null){
        let element = document.createElement("iframe");
        element.controls = true;
        super(file,type,element);
    }

    loadFileContent(){
        return new Promise((resolve, reject) => {
            this._readFileAsDataURL((result)=>{
                this.DOMElement.src = `${result}`;
                this.DOMElement.onload = () => {
                }
                resolve();
                
            });
          });
    }

    save(){
        super.save("Pdf.php");
    }

    
    static select(){
        let tag = document.createElement("iframe");
        tag.controls = true;
        super.select("Pdf.php",tag,"pdf");
    }

    static delete(){
        let tag = document.createElement("iframe");
        tag.controls = true;
        super.delete("Pdf.php",tag,"pdf");
    }
    
    
}