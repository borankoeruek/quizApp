package com.borankoeruek.quizapp.scheduler;

import java.util.Timer;
import java.util.TimerTask;

public class Scheduler {
	Timer timer = new Timer();

	public void scheduleTask(Runnable action, long delay, long period) {
		TimerTask timerTask = new TimerTask() {
			public void run() {
				action.run();
			}
		};

		timer.scheduleAtFixedRate(timerTask, delay, period);
	}
}
