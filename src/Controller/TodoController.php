<?php

namespace App\Controller;

use App\Entity\Todo;
use App\Repository\TodoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/todo', name: 'app_todo')]
class TodoController extends AbstractController
{
    public function __construct(private EntityManagerInterface $em, private TodoRepository $repository)
    {
    }

    #[Route('/create', name: 'app_todo_create')]
    public function create(Request $request): JsonResponse
    {
        $content = json_decode($request->getContent());

        $todo = new Todo();
        $todo->setName($content->name);
        $todo->setIsDone(false);

        try {
            $this->em->persist($todo);
            $this->em->flush();
        } catch (\Throwable $th) {
            return $this->json([
                'message' => [
                    'text' => 'Error during creation of To-do !',
                    'level' => 'error'
                ]
            ]);
        }

        return $this->json([
            'todo' => $todo->toArray(),
            'message' => [
                'text' => 'To-do created !',
                'level' => 'success'
            ]
        ]);

    }

    #[Route('/read', name: 'app_todo_read')]
    public function read(): JsonResponse
    {
        $todos = $this->repository->findAll();
        $arrayTodos = [];
        foreach($todos as $todo){
            $arrayTodos[] = $todo->toArray();
        }
        return $this->json($arrayTodos);
    }

    #[Route('/update/{id}', name: 'app_todo_update')]
    public function update(Request $request, Todo $todo): JsonResponse
    {
        $content = json_decode($request->getContent());
        $todo->setName($content->name);
        
        try {
            $this->em->flush();
            return $this->json([
                'success' => 'Task updated !'
            ]);
        } catch (\Throwable $th) {
            return $this->json([
                'error' => 'Error !'
            ]);
        }
    }

    #[Route('/delete/{id}', name: 'app_todo_delete')]
    public function delete(Todo $todo)
    {        
        try {
            $this->em->remove($todo);
            $this->em->flush();
            return $this->json([
                'success' => 'Task removed !'
            ]);
        } catch (\Throwable $th) {
            return $this->json([
                'error' => 'Error !'
            ]);
        }
    }

    #[Route('/done/{id}', name: 'app_todo_done')]
    public function isDone(Todo $todo, Request $request)
    {        
        $content = json_decode($request->getContent());

        $todo->setIsDone($content->isDone);
        
        try {
            $this->em->flush();
        } catch (\Throwable $th) {
            return $this->json([
                'error' => 'Error !'
            ]);
        }
        return $this->json([
            'success' => 'Task updated !'
        ]);
    }
}
