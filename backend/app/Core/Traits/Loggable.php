<?php

namespace App\Core\Traits;

trait Loggable
{
    public function log(string $message)
    {
        logger($message);
    }
}
