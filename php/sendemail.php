<?php
 use PHPMailer\PHPMailer\PHPHMailer;
 use PHPMailer\PHPMailer\Exception;

 require '../PHPMailer/src/Exception.php';
 require '../PHPMailer/src/PHPMailer.php';
 
 $json_string = file_get_contents('php://input');
 $post_data = json_decode($json_string, true);
 
 $post_name =  $post_data['name'];
 $post_mail =  $post_data['mail'];
 $post_message =  $post_data['message'];

 #$mail = new PHPMailer(true);
 $mail = new PHPMailer\PHPMailer\PHPMailer();
 $mail->CharSet = 'UTF-8';
 $mail->setLanguage('ru', '../PHPMailer/language/');
 $mail->IsHTML(true);

 //От кого письмо
 $mail->setFrom('sendmail@аск1.рф', 'АСК');
 //Кому отправить
 $mail->addAddress('a1master02@mail.ru');
 //Тема письма
 $mail->Subject = 'Сообщение от посетителя сайта';

 $body = "<h3>Пользователь заказал обратное письмо</h3>";
 $body.="<p><strong>Имя: </strong>$post_name</p>";
 $body.="<p><strong>E-Mail: </strong> $post_mail</p>";
 $body.="<p><strong>Сообщение: </strong>$post_message</p>";

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