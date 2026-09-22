<?php

declare(strict_types=1);

final class Validator
{
    /**
     * @param array<string,string> $rules
     * @return array<string,string>
     */
    public static function validate(array $data, array $rules): array
    {
        $errors = [];
        foreach ($rules as $field => $ruleString) {
            $value = trim((string) ($data[$field] ?? ''));
            foreach (explode('|', $ruleString) as $rule) {
                if ($rule === 'required' && $value === '') {
                    $errors[$field] = 'Bu alan zorunludur.';
                    break;
                }
                if ($rule === 'email' && $value !== '' && !filter_var($value, FILTER_VALIDATE_EMAIL)) {
                    $errors[$field] = 'Geçerli bir e-posta girin.';
                    break;
                }
                if (str_starts_with($rule, 'max:') && mb_strlen($value) > (int) substr($rule, 4)) {
                    $errors[$field] = 'Bu alan çok uzun.';
                    break;
                }
                if (str_starts_with($rule, 'min:') && $value !== '' && mb_strlen($value) < (int) substr($rule, 4)) {
                    $errors[$field] = 'Bu alan çok kısa.';
                    break;
                }
            }
        }
        return $errors;
    }
}
