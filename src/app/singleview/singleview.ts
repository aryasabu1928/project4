import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-singleview',
  imports: [],
  templateUrl: './singleview.html',
  styleUrl: './singleview.css',
})
export class Singleview {
//declare an array
singleproduct:any;
//create a constructor and initialise object of apiservice
constructor(private route:ActivatedRoute,private apiservice:Apiservice,private cdr:ChangeDetectorRef){}
ngOnInit()//create ngonit function(page load)
{
  //parameter mapping
  const
  productid=this.route.snapshot.paramMap.get('titileid');
  if(productid)
  {
    this.apiservice.getsingleproducts(productid).subscribe((data)=>{
      this.singleproduct=data;
      this.cdr.detectChanges()
      
    });
  } 
}
}

