

package com.rollnumber.event.Repo;
import org.springframework.data.jpa.repository.JpaRepository;

import com.rollnumber.event.model.Event;

    
    public interface  EventRepo extends JpaRepository<Event,Long> {



    
}

