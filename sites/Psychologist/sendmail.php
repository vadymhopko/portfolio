<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';


$mail = new PHPMailer(true);
$mail->Charset = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);


//От кого письмо
$mail->setFrom('user@example.com', 'Client');
//Кому отправить
$mail->addAddress('illonakorytko@yandex.ru');
//Тема письма
$mail->Subject = 'Psychologist consultation';


// //Рука
// $hand = "Правая";
// if($_POST['hand'] == "left"){
//     $hand = "Левая";
// }


//Тело письма
$body = '<h1>Письмо от клиента!</h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['subject']))){
    $body.='<p><strong>Тема:</strong> '.$_POST['subject'].'</p>';
}
if(trim(!empty($_POST['message']))){
    $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
}

// //Прикрепить файл
// if(!empty($_FILES['image']['tmp_name'])){
//     //Путь загрузки файла
//     $filePath = __DIR__ . "/files/" . $_FILES['image']['name']
//     //Грузим файл
//     if (copy($_FILES['image']['tmp_name'], $filePath)) {
//         $fileAttach = $filePath;
//         $body.='<p><strong>Фото в приложении</strong>';
//         $mail->addAttachment($fileAttach);
//     }
// }

$mail->Body = $body;

//Отправляем
if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-Type: application/json');
echo json_encode($response);
?>