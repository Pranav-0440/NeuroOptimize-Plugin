package com.example.runtime;

import com.example.annotations.NeuroOptimize;
import java.lang.reflect.Method;

public class NeuroExecutor {
    public static void run(Object obj) throws Exception {
        for (Method method : obj.getClass().getDeclaredMethods()) {
            if (method.isAnnotationPresent(NeuroOptimize.class)) {
                System.out.println("[NeuroOptimize] Running...");
                long start = System.nanoTime();
                method.invoke(obj);
                long end = System.nanoTime();
                System.out.println("[NeuroOptimize] Execution Time: " + (end - start)/1_000_000 + " ms");

            }
        }
    }
}
