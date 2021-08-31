<?php
 use PHPMailer\PHPMailer\PHPHMailer;
 use PHPMailer\PHPMailer\Exception;

 require '../PHPMailer/src/Exception.php';
 require '../PHPMailer/src/PHPMailer.php';

 $mail = new PHPMailer(true);
 $mail->CharSet = 'UTF-8';
 $mail->setLanguage('ru', '../PHPMailer/language/');
 $mail->IsHTML(true);

 //От кого письмо
 $mail->setFrom('backcall@аск1.рф', 'АСК');
 //Кому отправить
 $mail->addAddress('tiamin1989@yandex.ru');
 //Тема письма
 $mail->Subject = 'Запрос обратного звонка';

 $body = '<h1>Пользователь заказал обратный звонок</h1>';
 $body.='<p><strong>Имя: </strong> '.$_POST['name'].'</p>';
 $body.='<p><strong>Телефон: </strong> '.$_POST['phone'].'</p>';

 $mail->Body = $body;

 //Отправляем 
if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>