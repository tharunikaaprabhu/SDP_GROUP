package com.rollnumber.event.Repo;

import org.springframework.data.jpa.repository.JpaRepository;


import com.rollnumber.event.model.Payment;
    
    public interface  PaymentRepo extends JpaRepository<Payment,Long> {


}
