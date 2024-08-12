package com.rollnumber.event.controller;

    import java.util.List;
    
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.web.bind.annotation.DeleteMapping;
    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.PathVariable;
    import org.springframework.web.bind.annotation.PostMapping;
    import org.springframework.web.bind.annotation.RequestBody;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.RestController;

import com.rollnumber.event.model.Feedback;
import com.rollnumber.event.service.FeedbackService;


    @RestController
    @RequestMapping("/feedback")
public class FeedbackController {

    
        @Autowired
        private FeedbackService fservice;
    
        @GetMapping("/getfeedback")
        public List<Feedback> GetFeedback() {
            return fservice.getFeedback();
        }
    
        @PostMapping("/regfeedback")
        public Feedback AddFeedback(@RequestBody Feedback feedback) {
            return fservice.addFeedback(feedback);
        }
    
        @DeleteMapping("/delete/{fid}")
        public String DeleteFeedback(@PathVariable Long fid) {
            return fservice.deleteFeedback(fid);
        }
    
    }
    






