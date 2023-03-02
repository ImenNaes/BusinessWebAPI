// See https://aka.ms/new-console-template for more information
using RabbitMQ.Client;
using System.Data;
using System.Text;

Console.WriteLine("Hello, World!");


IConnection connection;
IModel channel;

ConnectionFactory factory = new ConnectionFactory();
factory.HostName= "localhost";  
factory.VirtualHost= "/";
factory.Port = 5672;
factory.UserName= "guest"; 
factory.UserName= "guest";

connection = factory.CreateConnection();
channel = connection.CreateModel();

//ex.fanout à creer dans l'interface de RabbitMq sur google 
//my.queue1 et my.queue2 à creer dans l'interface de RabbitMq sur google 
channel.ExchangeDeclare(
    "ex.fanout", 
    "fanout", 
    true, false, null);

channel.QueueDeclare(
    "my.queue1", 
    true, 
    false, 
    false, 
    null);

channel.QueueDeclare(
    "my.queue2",
    true,
    false,
    false,
    null);

channel.ExchangeBind("my.queue1","ex.fanout","");
channel.ExchangeBind("my.queue2","ex.fanout","");

channel.BasicPublish(
    "ex.fanout",
    "",
    null,
    Encoding.UTF8.GetBytes("Message 1")
    );

channel.BasicPublish(
    "ex.fanout",
    "",
    null,
    Encoding.UTF8.GetBytes("Message 2")
    );

channel.QueueDelete("my.queue1");
channel.QueueDelete("my.queue2");

channel.ExchangeDelete("ex.fanout");
channel.Close();
connection.Close(); 