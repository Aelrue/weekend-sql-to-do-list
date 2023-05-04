CREATE TABLE "tasks_list" (
    "id" serial PRIMARY KEY,
    "tasks" varchar(200),
    "isDone" boolean default false
);

SELECT * FROM "tasks_list";

INSERT INTO "tasks_list"(tasks)
VALUES ('Walk dog');

DELETE FROM "tasks_list"
WHERE "tasks" = 'Herro?' OR "tasks" = '';


UPDATE "tasks_list" SET "isDone" = 'true'
WHERE "id" = '15';

SELECT * FROM "tasks_list"
ORDER BY "isDone" 