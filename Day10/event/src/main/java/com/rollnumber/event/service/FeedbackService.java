package com.rollnumber.event.service;


    

import java.util.List;

import com.rollnumber.event.model.Feedback;






import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rollnumber.event.Repo.FeedbackRepo;

@Service
public class FeedbackService {
    




    @Autowired
    private FeedbackRepo frepo;

    public List<Feedback> getFeedback() {
        return frepo.findAll();
    }

    public Feedback addFeedback(Feedback feedback) {
        return frepo.save(feedback);
    }

    public String deleteFeedback(Long fid) {
        frepo.deleteById(fid);
        return "User Deleted " + fid;
    }

   
}



