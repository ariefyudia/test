# Task 2

#### 1. Make the code below cleaner, better and reusable

```php
# Add leading 0 number
# ex: 5 => 0005
private function convertNumber($number) {
    $length = 4;
    
    $length -= strlen($number);
    
    $add = str_pad($val, $length, '0', STR_PAD_LEFT);

    return $add.$number;
}

convertNumber(5);
```

#### 2. After change the code, make a pull request