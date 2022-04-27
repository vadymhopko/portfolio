"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    // //Для принятия изображений
    //     formData.append('image', formImage.file[0]);

    if (error === 0) {
      form.classList.add("_sending");

      let response = await fetch("sendmail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        // formPreview.innerHTML = ''; //очищаем изображения после отправки
        form.reset();
        form.classList.remove("_sending");
      } else {
        alert("Ошибка");
        form.classList.remove("_sending");
      }
    } else {
      alert("Заполните корректно обязательные поля");
    }
  }
  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (
        input.getAttribute("type") === "checkbox" &&
        input.checked === false
      ) {
        formAddError(input);
        error++;
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }

  //Получение инпут файла в переменную

  //   const formImage = document.getElementById('formImage'); // id инпута
  //   const formPreview = document.getElementById('formPreview'); // id дива для превью загруженных картинок

  //   formImage.addEventListener('change', () => {
  //     uploadFile(formImage.file[0]);
  //   });

  //   function uploadFile(file) {
  //     if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
  //       alert('Разрешены только изображения');
  //       formImage.value = '';
  //       return;
  //     }
  //     if (file.size > 2 * 1024 * 1024) {
  //       alert('Файл должен быть меньше 2 МБ.');
  //       return;
  //     }
  //     var reader = new FileReader();
  //     reader.onload = function (e) {
  //       formPreview.innerHTML = '<img src="${e.target.result}" alt="Фото">';
  //     };
  //     reader.onerror = function (e) {
  //       alert('Ошибка');
  //     };
  //     reader.readAsDataURL(file);
  //   }
});
