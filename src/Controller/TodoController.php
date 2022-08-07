<?php

namespace App\Controller;

use App\Repository\TodoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/todo', name: 'app_todo')]
class TodoController extends AbstractController
{
    public function __construct(private EntityManagerInterface $em, private TodoRepository $repository)
    {
    }

    #[Route('/create', name: 'app_todo_create')]
    public function create(): Response
    {
        
    }

    #[Route('/read', name: 'app_todo_read')]
    public function read(): Response
    {
        $todos = $this->repository->findAll();
        $arrayTodos = [];
        foreach($todos as $todo){
            $arrayTodos[] = $todo->toArray();
        }
        return $this->json($arrayTodos);
    }

    #[Route('/update/{id}', name: 'app_todo_update')]
    public function update(): Response
    {
        
    }

    #[Route('/delete/{id}', name: 'app_todo_delete')]
    public function delete(): Response
    {
        
    }
}
