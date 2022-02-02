import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: { id: string; name: string; };
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.user ={
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    this.route.params.subscribe((data: Params) => {
      this.user = {
       id: data['id'],
       name: data['name']
      }
    });
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment)
  }

  getJaganDetails(){
    this.router.navigate(['/users', 2, 'Angular'],
                        {queryParams: {page:1, search: 'Jagan'},
                        fragment: 'loading',
   });
  }

}
