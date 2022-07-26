import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { PostService } from './post.service';
import { UserService } from './user.service';




@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostService]
  
})
export class PostComponent implements OnInit {

  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute,private alertifyService:AlertifyService,private postService:PostService,private userService:UserService) { }
 

  posts:Post[];
  users:User[];
  today=  new Date(Date.now())
  filterText="";

  ngOnInit(): void {
    this.getUsers();
    this.activatedRoute.params.subscribe(params=>{
      this.getPosts(params["userid"]);
    });
    
  }

 getPosts(userid:number){
   this.postService.getPosts(userid).subscribe(data=>{this.posts=data})
 }

  getUsers(){
    this.userService.getUsers().subscribe((response) => (this.users = response))
  }

  addToFavorite(post:Post){
    this.alertifyService.success("Added to favs : "+ post.title)
  }
}
