# Task 4

#### 1. This code is working perfectly but it's hard to maintain, please make the code below cleaner and readable

```php
public function getPrice() {
  if($customer->status == 'active') {
	switch $customer->group {
		case 'distributor':
			if($customer->debt > 10000000) {
		        return error('this customer cannot make a purchase due to his debt over limit');
		      } else {
		        return Price::get('distributor');
		      }
		break;
		case 'general':
			if($customer->debt > 10000000) {
		        return error('this customer cannot make a purchase due to his debt over limit');
		      } else {
		        return Price::get('general');
		      }
		break;
	}
} else {
	return error('this customer is not active')
}
}
```

#### 2. After change the code, make a pull request
