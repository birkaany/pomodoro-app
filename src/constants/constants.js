export const controllers = [
  { label: "pomodoro", value: "pomodoroTime" },
  { label: "short break", value: "shortBreakTime" },
  { label: "long break", value: "longBreakTime" },
];

export const stages = {
  pomodoroTime: 25 * 60,
  shortBreakTime: 5 * 60,
  longBreakTime: 15 * 60,
  isPaused: true,
  period: 1,
};
