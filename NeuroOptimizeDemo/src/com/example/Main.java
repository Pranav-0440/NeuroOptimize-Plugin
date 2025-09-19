package com.example;

import com.example.runtime.NeuroExecutor;

public class Main {
    public static void main(String[] args) throws Exception {
        DemoService service = new DemoService();
        NeuroExecutor.run(service);
    }
}
