import { Component } from '@angular/core';
import { Card } from '../../shared/components/card/card';
import { Stat } from '../stat/stat';
import { Middle } from '../middle/middle';

@Component({
  selector: 'app-client',
  imports: [Card,Stat,Middle],
  templateUrl: './client.html',
  styleUrl: './client.css'
})
export class Client {

}
