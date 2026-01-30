

  // Highlight today's day
  const today = new Date().getDay();
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const todayRow = document.getElementById(days[today]);
  if (todayRow) todayRow.classList.add("highlight");

  // Dark mode toggle
  function toggleDark() {
    document.body.classList.toggle("dark");
  }
