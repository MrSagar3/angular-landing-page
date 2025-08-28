import { Component } from '@angular/core';
import { Card } from '../../shared/components/card/card';
import { Stat } from '../stat/stat';

@Component({
  selector: 'app-client',
  imports: [Card,Stat],
  templateUrl: './client.html',
  styleUrl: './client.css'
})
export class Client {

}
