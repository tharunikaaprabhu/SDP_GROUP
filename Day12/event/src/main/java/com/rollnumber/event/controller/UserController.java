// package com.rollnumber.event.controller;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.rollnumber.event.model.Users;
// import com.rollnumber.event.service.UserService;

// @RestController
// @RequestMapping("/users")
// public class UserController {
//     @Autowired
//     private UserService uservice;

//     @GetMapping("/getusers")
//     public List<Users> GetUsers() {
//         return uservice.getUsers();
//     }

//     @PostMapping("/register")
//     public Users AddUsers(@RequestBody Users users) {
//         return uservice.addUsers(users);
//     }

//     @DeleteMapping("/delete/{uid}")
//     public String DeleteUser(@PathVariable Long uid) {
//         return uservice.deleteUser(uid);
//     }

// }
