$response = ['error' => 'Unknown error'];
if (!isset($_POST['g-recaptcha-response'])) {
    $response = ['error' => 'reCAPTCHA missing'];
} elseif (!$recaptchaResult->success) {
    $response = ['error' => 'reCAPTCHA verification failed'];
} elseif (/* other conditions */) {
    // ...
    $response = mail($to, $subject, $body, $headers) ? ['success' => 'Submitted'] : ['error' => 'Failed to send email'];
}
http_response_code($response['success'] ? 200 : 400);
echo json_encode($response);