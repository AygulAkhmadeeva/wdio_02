class Page {
    constructor() {
        this.title = 'My Page';             //новое свойства title
    }

   open(path){
        browser.url(path)
   }

}

module.exports = Page;
