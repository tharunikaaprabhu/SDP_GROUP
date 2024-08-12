// package com.rollnumber.event.service;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.rollnumber.event.model.Users;
// import com.rollnumber.event.Repo.UserRepo;

// @Service
// public class UserService {
//     @Autowired
//     private UserRepo urepo;

//     public List<Users> getUsers() {
//         return urepo.findAll();
//     }

//     public Users addUsers(Users users) {
//         return urepo.save(users);
//     }

//     public String deleteUser(Long uid) {
//         urepo.deleteById(uid);
//         return "User Deleted " + uid;
//     }
// }