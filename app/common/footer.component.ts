/**
 * Created by ayaz on 21/05/16.
 */
import {Component} from '@angular/core';

@Component({
    selector : 'footer-component',
    template : `
        <footer class="footer">
            <div class="container">
                <a class="text-muted" href="/">&copy; Ayaz Hussein, {{ year }}</a>
                <a class="text-muted" href="https://www.facebook.com/ayaz.hussein" target="_blank"><i class="fa fa-facebook"></i> Ayaz Hussein</a>
                <a class="text-muted" href="https://ro.linkedin.com/in/ayaz-hussein-0a414b107" target="_blank"><i class="fa fa-linkedin"></i> Linkidin</a>
            </div>
        </footer>
    `,
    styles : [`
        footer {
            position: absolute
            bottom : 0;
            width: 100%;
            height: 60px;
            background-color: #f5f5f5;
        }
        .container {
            height: 60px;
        }
        
        a {
            height : 60px;
            line-height : 60px;
            margin-right : 5rem;
        
        }
    `]

})

export class FooterComponent {
    private year:number = (new Date()).getFullYear();
}