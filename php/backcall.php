<?php
 use PHPMailer\PHPMailer\PHPHMailer;
 use PHPMailer\PHPMailer\Exception;

 require '../PHPMailer/src/Exception.php';
 require '../PHPMailer/src/PHPMailer.php';
 
 $json_string = file_get_contents('php://input');
 $post_data = json_decode($json_string, true);
 
 $name =  $post_data['name'];
 $phone =  $post_data['phone'];

 #$mail = new PHPMailer(true);
 $mail = new PHPMailer\PHPMailer\PHPMailer();
 $mail->CharSet = 'UTF-8';
 $mail->setLanguage('ru', '../PHPMailer/language/');
 $mail->IsHTML(true);

 //От кого письмо
 $mail->setFrom('backcall@аск1.рф', 'АСК');
 //Кому отправить
 $mail->addAddress('a1master02@mail.ru');
 //Тема письма
 $mail->Subject = 'Запрос обратного звонка';

 $body = "<h3>Пользователь заказал обратный звонок</h3>";
 $body.="<p><strong>Имя: </strong>$name</p>";
 $body.="<p><strong>Телефон: </strong>$phone</p>";

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