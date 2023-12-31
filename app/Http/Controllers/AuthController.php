<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignUpRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function SignUp(SignUpRequest $request){
        $data = $request->validated();

        /** @var \App\Models\User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token,
        ]);
    }
    public function Login(LoginRequest $request){
        $credentials = $request->validated();
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if (!Auth::attempt($credentials, $remember)){
            return response([
                'error' => 'The Provided Credentials are not correct'
            ],422);
        }else{
            $user = Auth::user();
            $token = $this->$user->createToken('main')->plainTextToken;
        }

        return response([
            'user' => $user,
            'token' => $token,
        ]);
    }
    public function Logout(Request $request){
        $user = Auth::user();
        $this->$user->currentAccessToken()->delete();

        return response([
            'success' => true
        ]);
    }
}
