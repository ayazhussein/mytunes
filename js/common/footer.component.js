"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by ayaz on 21/05/16.
 */
var core_1 = require('@angular/core');
var FooterComponent = (function () {
    function FooterComponent() {
        this.year = (new Date()).getFullYear();
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'footer-component',
            template: "\n        <footer class=\"footer\">\n            <div class=\"container\">\n                <a class=\"text-muted\" href=\"/\">&copy; Ayaz Hussein, {{ year }}</a>\n                <a class=\"text-muted\" href=\"https://www.facebook.com/ayaz.hussein\" target=\"_blank\"><i class=\"fa fa-facebook\"></i> Ayaz Hussein</a>\n                <a class=\"text-muted\" href=\"https://ro.linkedin.com/in/ayaz-hussein-0a414b107\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i> Linkidin</a>\n            </div>\n        </footer>\n    ",
            styles: ["\n        footer {\n            position: absolute\n            bottom : 0;\n            width: 100%;\n            height: 60px;\n            background-color: #f5f5f5;\n        }\n        .container {\n            height: 60px;\n        }\n        \n        a {\n            height : 60px;\n            line-height : 60px;\n            margin-right : 5rem;\n        \n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map