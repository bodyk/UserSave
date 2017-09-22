﻿namespace UserSave.DataAccess.Interfaces
{
    public interface IEntity
    {
        long Id { get; set; }
        bool IsDeleted { get; set; }
    }
}