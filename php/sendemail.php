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
 $mail->setFrom('mail@аск1.рф', 'АСК');
 //Кому отправить
 $mail->addAddress('tiamin1989@yandex.ru');
 //Тема письма
 $mail->Subject = 'Запрос обратного письма';

 $body = '<h1>Пользователь заказал обратное письмо</h1>';
 $body.='<p><strong>Имя: </strong> '.$_POST['name'].'</p>';
 $body.='<p><strong>E-Mail: </strong> '.$_POST['mail'].'</p>';
 $body.='<p><strong>Сообщение: </strong> '.$_POST['message'].'</p>';

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
