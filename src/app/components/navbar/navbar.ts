import { Component } from '@angular/core';
import {LucideAngularModule,ArrowRight} from "lucide-angular"
@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  readonly ArrowRightIcon = ArrowRight

}
