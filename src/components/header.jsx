import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Link2, LogOut } from 'lucide-react';

const Header = () => {

    const navigate = useNavigate();
    const user = true;

  return (
    <nav className='py-4 flex justify-between items-center'>
    <Link to={"/"}>
    <img src="/Logo.png" className='h-16' alt="ShortLink Logo" />
    </Link>
    <div>
        {!user? (
        <Button onClick={()=> navigate("/auth")}>Login</Button>
        ):(
            <DropdownMenu>
  <DropdownMenuTrigger>
  <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Ritik Singh</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
        <Link2 className='mr-1 h-4 w-4' />
        <span>My Links</span>
        </DropdownMenuItem>
    <DropdownMenuItem className='text-red-400'>
        <LogOut className='mr-1 h-4 w-4' />
        <span>Logout</span>
        </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

        )
        
    }
        
    </div>


    </nav>
  )
}

export default Header