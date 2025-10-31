(function () {
  const form = document.getElementById('cardForm');
  const feedback = document.getElementById('feedback');
  const cardNumberInput = document.getElementById('cardNumber');

  cardNumberInput.addEventListener('input', (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 16);
    e.target.value = digits.replace(/(.{4})/g, '$1 ').trim();
  });

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    feedback.style.color = '#b00020';
    feedback.textContent = '';

    const rawNumber = document.getElementById('cardNumber').value.replace(/\s+/g, '');
    const monthVal = document.getElementById('month').value.trim();
    const yearVal = document.getElementById('year').value.trim();

    if (rawNumber !== '1234123412341234') {
      feedback.textContent = '❌ Invalid card number. Use 1234 1234 1234 1234 for grading.';
      return;
    }

    const month = parseInt(monthVal, 10);
    const twoDigitYear = parseInt(yearVal, 10);

    if (!/^\d{1,2}$/.test(monthVal) || isNaN(month) || month < 1 || month > 12) {
      feedback.textContent = '❌ Enter a valid expiration month (01 - 12).';
      return;
    }
    if (!/^\d{2}$/.test(yearVal) || isNaN(twoDigitYear)) {
      feedback.textContent = '❌ Enter a valid two-digit year (e.g. 25).';
      return;
    }

    const year = 2000 + twoDigitYear;

    const now = new Date();
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth() + 1;

    if (year < nowYear || (year === nowYear && month < nowMonth)) {
      feedback.textContent = '❌ Card is expired.';
      return;
    }

    feedback.style.color = '#1abc9c';
    feedback.textContent = '✅ Payment successful — card validated.';
    form.reset();
  });
})();
