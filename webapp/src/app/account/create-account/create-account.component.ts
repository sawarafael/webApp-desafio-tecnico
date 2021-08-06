import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account = {
    name      : '',
    email     : '',
    password  : '',
  };
  
  departaments: any = ['Financeiro', 'Administração',
   'Direção', 'Operacional', 'Infraestrutura', 'Desenvolvimento'];

  groups: any = ['CLT', 'PJ', 'Freelancer', 'Parceiro']

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }
    
  async onSubmit() {
    try {
      console.log()
      const result = await this.accountService.createAccount(this.account);

      // exibir uma msg amigavel aqui
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

}
