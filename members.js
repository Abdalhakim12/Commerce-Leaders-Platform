// === إعدادات ===
const CORRECT_PASSWORD = "unknown00"; // ← غيّر كلمة السر
const TARGET_PAGE = "main.html"; // ← غيّر صفحة الوجهة

// === عناصر DOM ===
const pwInput = document.getElementById("pw");
const submitBtn = document.getElementById("submitBtn");
const msgEl = document.getElementById("msg");

// التحقق
function handleLogin() {
  const val = pwInput.value.trim();

  if (!val) {
    showMessage("اكتب كلمة المرور أولاً", "error");
    pwInput.focus();
    return;
  }

  if (val === CORRECT_PASSWORD) {
    showMessage("تم التحقق — جارٍ التحويل ...", "ok");
    setTimeout(() => {
      window.location.href = TARGET_PAGE;
    }, 500);
  } else {
    showMessage("كلمة المرور خاطئة", "error");
    pwInput.value = "";
    pwInput.focus();
  }
}

// عرض رسالة
function showMessage(text, type) {
  msgEl.textContent = text;
  msgEl.classList.remove("error", "ok");
  msgEl.classList.add(type === "ok" ? "ok" : "error");
}

// الأحداث
submitBtn.addEventListener("click", handleLogin);
pwInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") handleLogin();
});
