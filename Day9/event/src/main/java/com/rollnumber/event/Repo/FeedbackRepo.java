package com.rollnumber.event.Repo;



import org.springframework.data.jpa.repository.JpaRepository;

import com.rollnumber.event.model.Feedback;


    public interface  FeedbackRepo extends JpaRepository<Feedback,Long> {


}


