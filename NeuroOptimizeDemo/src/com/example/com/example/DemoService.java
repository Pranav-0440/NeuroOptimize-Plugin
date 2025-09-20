package com.example;

import com.example.annotations.NeuroOptimize;

public class DemoService {

    @NeuroOptimize
    public void processData() {
        for (int i = 0; i < 1000; i++) {
            System.out.println("Processing " + i);
        }
    }
}
